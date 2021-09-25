import React, { createContext, ReactNode, useState, useEffect } from "react";
import { auth, firestore } from "../services/firebase";

import { UserType } from "../@types/types";

type AuthContextType = {
  user: UserType | undefined;
  signInWithEmailAndPassword: (useProps: createUserProps) => Promise<void>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  setInitialSetup: (useProps: setInitialSetupProps) => Promise<void>;
  logout: () => void;
  errorMsg: string;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type createUserProps = {
  name: string;
  email: string;
  password: string;
};

type setInitialSetupProps = {
  farmName: string;
  config: {
    tempUnit: string;
  };
  location: {
    country: string;
    state: string;
    city: string;
  };
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<UserType>();
  const [errorMsg, setErrorMsg] = useState("");

  async function signInWithEmailAndPassword(useProps: createUserProps) {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        useProps.email,
        useProps.password
      );

      const uid = userCredential.user?.uid;

      await firestore.collection("Users").doc(uid).set({
        name: useProps.name,
      });

      setUser({
        id: uid || "",
        name: useProps.name,
      });
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("This email address is already in use!");
      } else {
        setErrorMsg(error.message);
      }
    }
  }

  async function loginWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );

      const uid = userCredential.user?.uid;

      const userDb = await firestore.collection("Users").doc(uid).get();

      setUser({
        id: uid || "",
        name: userDb.data()?.name,
        config: userDb.data()?.config,
        location: userDb.data()?.location,
        farmName: userDb.data()?.farmName,
      });
    } catch (error) {}
  }

  async function setInitialSetup(userPorps: setInitialSetupProps) {
    try {
      console.log(user?.id);
      await firestore
        .collection("Users")
        .doc(user?.id)
        .update({
          farmName: userPorps.farmName,
          config: {
            tempUnit: userPorps.config.tempUnit,
          },
          location: {
            country: userPorps.location.country,
            state: userPorps.location.state,
            city: userPorps.location.city,
          },
        });

      const userAux: UserType = {
        id: user?.id || "",
        name: user?.name || "",
        avatar: user?.avatar,
        farmName: userPorps.farmName,
        config: {
          tempUnit: userPorps.config.tempUnit,
        },
        location: {
          country: userPorps.location.country,
          state: userPorps.location.state,
          city: userPorps.location.city,
        },
      };
      setUser(userAux);
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  }

  function logout() {
    auth.signOut().then(() => {
      setUser(undefined);
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { uid } = user;

        const userDb = await firestore.collection("Users").doc(uid).get();

        setUser({
          id: uid,
          name: userDb.data()?.name,
          config: userDb.data()?.config,
          location: userDb.data()?.location,
          farmName: userDb.data()?.farmName,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithEmailAndPassword,
        loginWithEmailAndPassword,
        setInitialSetup,
        logout,
        errorMsg,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

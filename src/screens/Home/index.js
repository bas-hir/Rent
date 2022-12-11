import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../modals/colors";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Postitems from "../../components/postitems";
import HeaderForMobile from "../../components/headerForMobile";
import { API } from "aws-amplify";
import { getListingByCreatedAt } from "../../graphql/queries";

const Home = () => {
  const fetchAll = async () => {
    try {
      const itemListByCommonId = await API.graphql({
        query: getListingByCreatedAt,
        variables: { commonID: "1", sortDirection: "DESC" },
        authMode: "AWS_IAM",
      });
      console.log(itemListByCommonId);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <>
      <HeaderForMobile />
      <Postitems />
    </>
  );
};

export default Home;

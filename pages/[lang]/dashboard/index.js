import React, { Component } from "react";
import { withApollo } from "lib/apollo/withApollo";

import { locales } from "translations/config";
import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";
import fetchTranslations from "staticUtils/translations/fetchTranslations";

import CircularChart from "../../../components/CirculatChart";

class Dashboard extends Component {
  render() {
    const { shop } = this.props;
    const label = shop?.name || "Default Label";
    return <CircularChart value={0.67} color="#D73775" label={label}></CircularChart>;
  }
}

/**
 *  Static props for the dashboard
 *
 * @returns {Object} the props
 */
export async function getStaticProps({ params: { lang } }) {
  return {
    props: {
      ...(await fetchPrimaryShop(lang)),
      ...(await fetchTranslations(lang, ["common"])),
    },
  };
}

/**
 *  Static paths for the dashboard
 *
 * @returns {Object} thepaths
 */
export async function getStaticPaths() {
  return {
    paths: locales.map((locale) => ({ params: { lang: locale } })),
    fallback: false,
  };
}

export default withApollo()(Dashboard);

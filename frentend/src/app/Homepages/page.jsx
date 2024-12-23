"use client";

import React from "react";
import Baner from "./baner";
import { TopSellingProducts } from "./TopSellingProducts";
import { SpotlightProducts } from "./Spotlight";
import { TopPicks } from "./TopPicks";
import { ProductHighlight } from "./ProductHighlight";
import SportsCollection from "./SportsCollection";
import { PremiumProducts } from "./PremiumProducts";
import { Spotlight2 } from "./Spotlight2";

import Collection from "./Collection";
import AccessoriesCollection from "./AccessoriesCollection";
import { Product2Highlight } from "./ProductHighlight2";
import VideoSection from "./VideoSection";

import OfferingSection from "./OfferingSection";
import { WallOfFame } from "./WallOfFame/WallOfFame";


export default function Page() {
    return (
        <div>
            <Baner />
            <TopSellingProducts />
            <SpotlightProducts/>
            <TopPicks/>
            <ProductHighlight/>
            <SportsCollection/>
            <Product2Highlight/>
            <PremiumProducts/>
            <Spotlight2/>
            <AccessoriesCollection/>
            <Collection/>
            <VideoSection/>
            <WallOfFame/>
            <OfferingSection/>
        </div>
    );
}

import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar/navbar";
import { CategoryList } from "../category-list/category-list";
import { HeroSection } from "../hero-section/hero-section";
import { PremiumGifts } from "../premium-gifts/premium-gifts";
import { PopularItems } from "../popular-items/popular-items";
import { AboutSection } from "../about-section/about-section";
import { GallerySection } from "../gallery-section/gallery-section";
import { ReviewComponent } from "../review-comp/review-comp";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home-page',
  imports: [CategoryList, HeroSection, PremiumGifts, PopularItems, AboutSection, GallerySection, ReviewComponent, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}

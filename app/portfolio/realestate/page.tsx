import { redirect } from "next/navigation";

// Real estate had no listings yet; send visitors to the portfolio page.
export default function RealEstateRedirect() {
  redirect("/portfolio/");
}

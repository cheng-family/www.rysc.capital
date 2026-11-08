import { redirect } from "next/navigation";

// Startups now live on the combined portfolio page.
export default function StartupsRedirect() {
  redirect("/portfolio/#startups");
}

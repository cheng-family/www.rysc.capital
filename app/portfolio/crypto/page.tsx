import { redirect } from "next/navigation";

// Crypto now lives on the combined portfolio page.
export default function CryptoRedirect() {
  redirect("/portfolio/#crypto");
}

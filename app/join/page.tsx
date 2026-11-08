import { redirect } from "next/navigation";

// The Join page was folded into the "Work with us" section.
export default function JoinRedirect() {
  redirect("/#work-with-us");
}

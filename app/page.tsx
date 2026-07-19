import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const acceptLanguage = (await headers()).get("accept-language") ?? "";
  const preferredLanguage = acceptLanguage.split(",")[0]?.trim().toLowerCase();

  redirect(preferredLanguage?.startsWith("es") ? "/es" : "/en");
}

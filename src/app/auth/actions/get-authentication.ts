"use server";

import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "../auth-cookie";

export default async function getAuthentication() {
	return cookies().get(AUTHENTICATION_COOKIE)
}
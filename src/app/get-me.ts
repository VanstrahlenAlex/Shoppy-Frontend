"use server";

import { API_URL } from "@/app/common/constants/api";
import { get } from "@/app/common/util/fetch";
import { cookies } from "next/headers";

export default async function getMe() {
	return get("users/me")
}
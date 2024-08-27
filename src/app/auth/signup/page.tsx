"use client"
import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import createUser from "./create-user";
import { useFormState } from "react-dom";


export default function SignupPage() {
	const [ state, formAction ] = useFormState(createUser, { error: ""})
	return (
		<>
			<form action={formAction} className="w-full max-w-xs">
				<Stack spacing={2} >
					<TextField name="email" label="Email" variant="outlined" type="email" 
						helperText={state.error}
						error={!!state.error}
						/>
					<TextField name="password" label="Password" variant="outlined" type="password"
						helperText={state.error}
						error={!!state.error}
					/>
					<Button type="submit" variant="contained">Signup</Button>
					<p className="text-center">Do you have an Account yet?</p>
					<Link component={NextLink} href={"/auth/login"} className="self-center">
						Login
					</Link>

				</Stack>
			</form>
		</>
	)
}

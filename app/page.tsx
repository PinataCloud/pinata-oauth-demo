"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Container,
  Button,
  Stack,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import appsScreen from "../public/apps-screen.png";
import createApp from "../public/create-app.png";

export default function Home() {
  const [session, setSession] = useState("");
  // a46e5020-22bd-4038-a700-ac5a0d3fb417
  // http://localhost:3000
  const [clientID, setClientID] = useState("");
  const [redirectUri, setRedirectUri] = useState("");
  const [oauthLink, setOAuthLink] = useState("");

  useEffect(() => {
    const defaultedClientID = clientID || 'INPUT_CLIENT_ID';
    const defaultedRedirectUri = redirectUri || 'INPUT_REDIRECT_URI';
    const generatedLink = `https://auth.devpinata.cloud/realms/pinata/protocol/openid-connect/auth?client_id=${defaultedClientID}&redirect_uri=${defaultedRedirectUri}&response_type=code`;
    setOAuthLink(generatedLink);
  }, [clientID, redirectUri]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const session = urlParams.get("session_state");
    if (session) {
      setSession(session);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <Typography variant="h2">Pinata Oauth2 Demo App</Typography>
      <Container sx={{ display: "flex", gap: 3 }}>
        <Stack component={Paper} sx={{ gap: 4, flex: 1, p: 2, pl: 4 }}>
          <Typography variant="h3">Instructions</Typography>
          <List sx={{ listStyle: "decimal", gap: 0.5 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Sign in with Pinata" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Create an app on the Pinata dashboard." />
              <Button
                sx={{ p: 1 }}
                fullWidth
                variant="contained"
                color="primary"
                onClick={() =>
                  window.open(
                    "https://app.devpinata.cloud/apps",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Create an App
              </Button>
              <Stack sx={{ gap: 1.5, pt: 1 }}>
                <Typography>
                  A valid name, logo, and redirect url are required for creating
                  a client.
                </Typography>
                <Image
                  src={appsScreen}
                  alt="Arrows pointing to the create app button from the Pinata website"
                />
                <Image
                  src={createApp}
                  alt="Create app form on the Pinata website"
                />
              </Stack>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Stack sx={{ gap: 1 }}>
                <ListItemText primary="Use the provided Client ID to prepare the authorization link." />
                <TextField
                  label="Client ID"
                  variant="outlined"
                  value={clientID}
                  onChange={(e) => setClientID(e.target.value)}
                  required
                />
                <TextField
                  label="Redirect URI"
                  variant="outlined"
                  value={redirectUri}
                  onChange={(e) => setRedirectUri(e.target.value)}
                  required
                />
                <Typography
                  component="code"
                  sx={{
                    fontFamily: "monospace",
                    backgroundColor: "#f5f5f5",
                    padding: "2px 4px",
                    borderRadius: "4px",
                    marginTop: 2,
                    wordBreak: "break-all",
                  }}
                >
                  {oauthLink}
                </Typography>
              </Stack>
            </ListItem>
          </List>
          <Typography>
            Click the &quot;Authorize with Pinata&quot; button above to start
            the OAuth2 flow. After clicking the button, you will be redirected
            to the Pinata OAuth2 page. Click &quot;Authorize&quot; to grant
            access to your Pinata account.
          </Typography>
          <Button
            sx={{ p: 2 }}
            variant="contained"
            color="primary"
            onClick={() => {
              window.open(oauthLink, "_self");
              console.log("clientID:", clientID);
            }}
            disabled={clientID === "" || redirectUri === ""}
          >
            Authorize with Pinata
          </Button>
          <Typography>
            After clicking the button, you will be redirected to the Pinata
            OAuth2 page.
          </Typography>
        </Stack>
        <Stack
          component={Paper}
          sx={{ gap: 4, flex: 1, p: 2, pl: 4, height: "min-content" }}
        >
          {session && session !== "" ? (
            <>
              <Typography variant="h3">Connected!</Typography>
              <Typography>{session}</Typography>
            </>
          ) : (
            <>
              <Typography variant="h3">Not Connected...</Typography>
              <Typography>
                No Data Yet! Finish setting up your OAuth flow.
              </Typography>
            </>
          )}
        </Stack>
      </Container>
    </main>
  );
}

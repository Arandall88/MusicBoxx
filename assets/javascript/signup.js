const cred = await navigator.credentials.get({ password: true });

const cred = new PasswordCredential({
  id: user.username,
  password: user.password,
  name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
  iconURL: user.avatar,
});
await navigator.credentials.store(cred);

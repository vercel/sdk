# TypeGithub

## Example Usage

```typescript
import { TypeGithub } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: TypeGithub = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `appId`                                                 | *number*                                                | :heavy_minus_sign:                                      | GitHub App numeric ID.                                  |
| `appSlug`                                               | *string*                                                | :heavy_minus_sign:                                      | GitHub App slug.                                        |
| `appName`                                               | *string*                                                | :heavy_minus_sign:                                      | GitHub App display name.                                |
| `clientId`                                              | *string*                                                | :heavy_minus_sign:                                      | GitHub App OAuth client ID.                             |
| `owner`                                                 | [models.Owner](../models/owner.md)                      | :heavy_minus_sign:                                      | GitHub App owner.                                       |
| `clientSecret`                                          | *string*                                                | :heavy_minus_sign:                                      | GitHub App OAuth client secret.                         |
| `privateKeyPem`                                         | *string*                                                | :heavy_minus_sign:                                      | GitHub App private key in PEM format.                   |
| `webhookSecret`                                         | *string*                                                | :heavy_minus_sign:                                      | GitHub App webhook secret.                              |
| `extras`                                                | Record<string, *any*>                                   | :heavy_minus_sign:                                      | Additional provider metadata stored with the connector. |
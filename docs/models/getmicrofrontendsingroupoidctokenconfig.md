# GetMicrofrontendsInGroupOidcTokenConfig

## Example Usage

```typescript
import { GetMicrofrontendsInGroupOidcTokenConfig } from "@vercel/sdk/models/getmicrofrontendsingroupflatratetier.js";

let value: GetMicrofrontendsInGroupOidcTokenConfig = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Whether or not to generate OpenID Connect JSON Web Tokens.                                   |
| `issuerMode`                                                                                 | [models.GetMicrofrontendsInGroupIssuerMode](../models/getmicrofrontendsingroupissuermode.md) | :heavy_minus_sign:                                                                           | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`            |
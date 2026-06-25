# ImportConnectorTokensRequestBody

## Example Usage

```typescript
import { ImportConnectorTokensRequestBody } from "@vercel/sdk/models/importconnectortokensop.js";

let value: ImportConnectorTokensRequestBody = {
  tokens: [
    {
      accessToken: "<value>",
      expiresAt: 6708.74,
      subject: {
        type: "user",
        id: "<id>",
      },
      environment: "development",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `tokens`                               | [models.Tokens](../models/tokens.md)[] | :heavy_check_mark:                     | N/A                                    |
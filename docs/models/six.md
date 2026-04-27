# Six

The payload of the event, if requested.

## Example Usage

```typescript
import { Six } from "@vercel/sdk/models/payload1.js";

let value: Six = {
  credential: {
    id: "<id>",
    name: "<value>",
    providerSlug: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `credential`                                 | [models.Credential](../models/credential.md) | :heavy_check_mark:                           | N/A                                          |
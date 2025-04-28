# Credentials2

## Example Usage

```typescript
import { Credentials2 } from "@vercel/sdk/models/userevent.js";

let value: Credentials2 = {
  type: "github-app-custom-host",
  host: "quiet-fax.name",
  id: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.UserEventCredentialsType](../models/usereventcredentialstype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `host`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
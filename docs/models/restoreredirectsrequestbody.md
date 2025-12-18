# RestoreRedirectsRequestBody

## Example Usage

```typescript
import { RestoreRedirectsRequestBody } from "@vercel/sdk/models/restoreredirectsop.js";

let value: RestoreRedirectsRequestBody = {
  redirects: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `redirects`                                                                                    | *string*[]                                                                                     | :heavy_check_mark:                                                                             | The redirects to restore. The source of the redirect is used to match the redirect to restore. |
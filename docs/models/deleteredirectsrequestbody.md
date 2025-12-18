# DeleteRedirectsRequestBody

## Example Usage

```typescript
import { DeleteRedirectsRequestBody } from "@vercel/sdk/models/deleteredirectsop.js";

let value: DeleteRedirectsRequestBody = {
  redirects: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `redirects`                                                                                  | *string*[]                                                                                   | :heavy_check_mark:                                                                           | The redirects to delete. The source of the redirect is used to match the redirect to delete. |
# DeleteV1BulkRedirectsRequestBody

## Example Usage

```typescript
import { DeleteV1BulkRedirectsRequestBody } from "@vercel/sdk/models/deletev1bulkredirectsop.js";

let value: DeleteV1BulkRedirectsRequestBody = {
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
# DeleteRoutesRequestBody

## Example Usage

```typescript
import { DeleteRoutesRequestBody } from "@vercel/sdk/models/deleteroutesop.js";

let value: DeleteRoutesRequestBody = {
  routeIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `routeIds`                      | *string*[]                      | :heavy_check_mark:              | The IDs of the routes to delete |
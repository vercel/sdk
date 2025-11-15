# OneHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNineteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndNineteen = {
  uid: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `role`             | *string*           | :heavy_minus_sign: | N/A                |
| `uid`              | *string*           | :heavy_check_mark: | N/A                |
| `origin`           | *string*           | :heavy_minus_sign: | N/A                |
| `teamRoles`        | *string*[]         | :heavy_minus_sign: | N/A                |
| `teamPermissions`  | *string*[]         | :heavy_minus_sign: | N/A                |
| `entitlements`     | *string*[]         | :heavy_minus_sign: | N/A                |
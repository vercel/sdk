# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndFortyTwo = {
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
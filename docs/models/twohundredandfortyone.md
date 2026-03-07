# TwoHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyOne } from "@vercel/sdk/models/twohundredandfourteen.js";

let value: TwoHundredAndFortyOne = {
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
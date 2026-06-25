# ThreeHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwo } from "@vercel/sdk/models/rollbackdescription.js";

let value: ThreeHundredAndTwo = {
  personalAccountId: "<id>",
  managedAccountId: "<id>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `personalAccountId` | *string*            | :heavy_check_mark:  | N/A                 |
| `managedAccountId`  | *string*            | :heavy_check_mark:  | N/A                 |
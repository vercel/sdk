# ThreeHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyEight } from "@vercel/sdk/models/usereventpayloadrole.js";

let value: ThreeHundredAndThirtyEight = {
  gitForkProtection: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `gitForkProtection` | *boolean*           | :heavy_check_mark:  | N/A                 |
| `projectId`         | *string*            | :heavy_check_mark:  | N/A                 |
| `projectName`       | *string*            | :heavy_check_mark:  | N/A                 |
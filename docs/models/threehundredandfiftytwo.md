# ThreeHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyTwo } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndFiftyTwo = {
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
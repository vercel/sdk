# ThreeHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSix } from "@vercel/sdk/models/twohundredandseventysix.js";

let value: ThreeHundredAndSix = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: true,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectId`         | *string*            | :heavy_check_mark:  | N/A                 |
| `projectName`       | *string*            | :heavy_check_mark:  | N/A                 |
| `gitForkProtection` | *boolean*           | :heavy_check_mark:  | N/A                 |
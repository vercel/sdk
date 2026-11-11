# ThreeHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyEight } from "@vercel/sdk/models/usereventprincipal4.js";

let value: ThreeHundredAndFiftyEight = {
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
# TwoHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixty } from "@vercel/sdk/models/twohundredandfiftysix.js";

let value: TwoHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: false,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectId`         | *string*            | :heavy_check_mark:  | N/A                 |
| `projectName`       | *string*            | :heavy_check_mark:  | N/A                 |
| `gitForkProtection` | *boolean*           | :heavy_check_mark:  | N/A                 |
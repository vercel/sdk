# TwoHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinety } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndNinety = {
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
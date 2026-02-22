# OneHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyTwo } from "@vercel/sdk/models/projectanalytics.js";

let value: OneHundredAndFiftyTwo = {
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
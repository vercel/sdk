# ThreeHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFour } from "@vercel/sdk/models/threehundredandtwentyfive.js";

let value: ThreeHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  removeVercelRequestHeaders: false,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `projectId`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `projectName`                | *string*                     | :heavy_check_mark:           | N/A                          |
| `removeVercelRequestHeaders` | *boolean*                    | :heavy_check_mark:           | N/A                          |
# ThreeHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixty } from "@vercel/sdk/models/threehundredandtwentyone.js";

let value: ThreeHundredAndSixty = {
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
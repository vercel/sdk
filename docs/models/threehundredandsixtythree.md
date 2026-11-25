# ThreeHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyThree } from "@vercel/sdk/models/usereventpayload328previous.js";

let value: ThreeHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  removeVercelRequestHeaders: true,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `projectId`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `projectName`                | *string*                     | :heavy_check_mark:           | N/A                          |
| `removeVercelRequestHeaders` | *boolean*                    | :heavy_check_mark:           | N/A                          |
# ThreeHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySix } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: ThreeHundredAndFiftySix = {
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
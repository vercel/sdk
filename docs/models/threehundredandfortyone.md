# ThreeHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyOne } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: ThreeHundredAndFortyOne = {
  domain: "excellent-affect.org",
  projectId: "<id>",
  projectName: "<value>",
  target: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `domain`             | *string*             | :heavy_check_mark:   | N/A                  |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `redirect`           | *string*             | :heavy_minus_sign:   | N/A                  |
| `redirectStatusCode` | *number*             | :heavy_minus_sign:   | N/A                  |
| `target`             | *string*             | :heavy_check_mark:   | N/A                  |
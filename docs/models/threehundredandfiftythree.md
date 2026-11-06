# ThreeHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyThree } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: false,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `projectName`         | *string*              | :heavy_check_mark:    | N/A                   |
| `protectedSourcemaps` | *boolean*             | :heavy_check_mark:    | N/A                   |
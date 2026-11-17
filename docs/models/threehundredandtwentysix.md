# ThreeHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySix } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndTwentySix = {
  onCommit: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
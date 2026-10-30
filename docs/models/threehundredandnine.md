# ThreeHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNine } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndNine = {
  onCommit: false,
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
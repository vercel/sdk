# ThreeHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixteen } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndSixteen = {
  gitLFS: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitLFS`           | *boolean*          | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
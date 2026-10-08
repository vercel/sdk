# ThreeHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwo } from "@vercel/sdk/models/threehundredandone.js";

let value: ThreeHundredAndTwo = {
  gitCommitStatus: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitCommitStatus`  | *boolean*          | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
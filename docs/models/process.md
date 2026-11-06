# Process

Quick restarts of the user container in a row. Absent when there are none.

## Example Usage

```typescript
import { Process } from "@vercel/sdk/models/getprojectboxesop.js";

let value: Process = {
  restarts: 6398.7,
  crashLooping: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `lastExitCode`     | *number*           | :heavy_minus_sign: | N/A                |
| `restarts`         | *number*           | :heavy_check_mark: | N/A                |
| `crashLooping`     | *boolean*          | :heavy_check_mark: | N/A                |
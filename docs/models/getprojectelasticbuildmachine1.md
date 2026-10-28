# GetProjectElasticBuildMachine1

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectElasticBuildMachine1 } from "@vercel/sdk/models/getprojectbuilds.js";

let value: GetProjectElasticBuildMachine1 = {
  cores: 3399.98,
  label: "standard",
  memory: 9279.23,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cores`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *"standard"*       | :heavy_check_mark: | N/A                |
| `memory`           | *number*           | :heavy_check_mark: | N/A                |
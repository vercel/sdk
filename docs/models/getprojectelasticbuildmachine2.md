# GetProjectElasticBuildMachine2

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectElasticBuildMachine2 } from "@vercel/sdk/models/getprojectbuilds.js";

let value: GetProjectElasticBuildMachine2 = {
  cores: 1075.5,
  label: "enhanced",
  memory: 2398.4,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cores`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *"enhanced"*       | :heavy_check_mark: | N/A                |
| `memory`           | *number*           | :heavy_check_mark: | N/A                |
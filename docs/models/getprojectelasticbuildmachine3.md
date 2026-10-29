# GetProjectElasticBuildMachine3

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectElasticBuildMachine3 } from "@vercel/sdk/models/getprojectbuilds.js";

let value: GetProjectElasticBuildMachine3 = {
  cores: 8944.46,
  label: "14cpu-28gb",
  memory: 9102.26,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cores`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *"14cpu-28gb"*     | :heavy_check_mark: | N/A                |
| `memory`           | *number*           | :heavy_check_mark: | N/A                |
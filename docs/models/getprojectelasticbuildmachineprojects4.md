# GetProjectElasticBuildMachineProjects4

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectElasticBuildMachineProjects4 } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectElasticBuildMachineProjects4 = {
  cores: 3400.5,
  label: "turbo",
  memory: 5532.23,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cores`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *"turbo"*          | :heavy_check_mark: | N/A                |
| `memory`           | *number*           | :heavy_check_mark: | N/A                |
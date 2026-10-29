# GetProjectElasticBuildMachineProjects2

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectElasticBuildMachineProjects2 } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectElasticBuildMachineProjects2 = {
  cores: 863.06,
  label: "enhanced",
  memory: 276.38,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cores`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *"enhanced"*       | :heavy_check_mark: | N/A                |
| `memory`           | *number*           | :heavy_check_mark: | N/A                |
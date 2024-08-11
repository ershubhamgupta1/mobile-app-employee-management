import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Dashboard: undefined;
    CreateEmployee: undefined;
    UpdateEmployee: undefined;
    EmployeeDetail: {name?: string, position?: string};
  };

  
export type CreateEmployeeScreenProp = StackNavigationProp<RootStackParamList, 'CreateEmployee'>;

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>
  ) {}

  async findAll(context: any) {
    const params = new Object();
    let list = [];

    if (context.name !== undefined) {
      params['name'] = context.name;
    }

    if (context.activeFlag !== undefined) {
      params['active_flag'] = context.activeFlag;
    }

    if (context.address1 !== undefined) {
      params['address1'] = context.address1;
    }

    if (context.address2 !== undefined) {
      params['address2'] = context.address2;
    }

    if (context.tel1 !== undefined) {
      params['tel1'] = context.tel1;
    }

    if (context.tel2 !== undefined) {
      params['tel2'] = context.tel2;
    }

    if (context.email !== undefined) {
      params['email'] = context.email;
    }

    if (context.changeCount !== undefined) {
      params['change_count'] = context.changeCount;
    }

    if (context.dataFlag !== undefined) {
      params['data_flag'] = context.dataFlag;
    }

    const result = await this.groupRepository.find({
      company: context.company,
      lang: context.lang,
      ...params
    });

    list = [...result];

    // form to groupcode
    if (context.codeFrom !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.code === context.codeFrom;
      });

      if (index >= 0) {
        list = list.slice(index);
      }
    }

    if (context.codeTo !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.code === context.codeTo;
      });

      if (index >= 0) {
        list = list.slice(0, index + 1);
      }
    }

    // form to department_code
    if (context.department_codeFrom !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.department_code === context.department_codeFrom;
      });

      if (index >= 0) {
        list = list.slice(index);
      }
    }

    if (context.department_codeTo !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.department_code === context.department_codeTo;
      });

      if (index >= 0) {
        list = list.slice(0, index + 1);
      }
    }

    // from to create_emp_id
    if (context.createEmpFrom !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.create_emp_id === context.createEmpFrom;
      });
      if (index >= 0) {
        list = list.slice(index, list.length);
      }
    }

    if (context.createEmpTo !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.create_emp_id === context.createEmpTo;
      });

      if (index >= 0) {
        list = list.slice(0, index + 1);
      }
    }

    // from to change_emp_id
    if (context.changeEmpFrom !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.change_emp_id === context.changeEmpFrom;
      });

      if (index >= 0) {
        list = list.slice(index, list.length);
      }
    }

    if (context.changeEmpTo !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.change_emp_id === context.changeEmpTo;
      });

      if (index >= 0) {
        list = list.slice(0, index + 1);
      }
    }

    // from to create_datetime
    if (context.createDatetimeFrom !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.create_datetime === new Date(context.createDatetimeFrom);
      });

      if (index >= 0) {
        list = list.slice(index, list.length);
      }
    }

    if (context.createDatetimeTo !== undefined) {
      const index = list.findIndex((element: any) => {
        return element.create_datetime === context.createDatetimeTo;
      });

      if (index >= 0) {
        list = list.slice(0, index + 1);
      }
    }

    // from to change_datetime
    if (context.changeDatetimeFrom !== undefined) {
      const dateFrom = new Date(context.changeDatetimeFrom);
    
      const sortListByDate = list.sort((a,b) => a.change_datetime - b.change_datetime);
    
      const indexFrom = sortListByDate.findIndex((element: any) => {
        return new Date(element.change_datetime+ "+0000").toJSON() >= new Date(context.changeDatetimeFrom).toJSON();
      });

      if( new Date(sortListByDate[sortListByDate.length-1].change_datetime + "+0000").toJSON() < dateFrom.toJSON() ){
        console.log(new Date(sortListByDate[sortListByDate.length-1].change_datetime + "+0000").toJSON(), dateFrom.toJSON())
        list =[]
      }

      if (indexFrom >= 0) {
        list = sortListByDate.slice(indexFrom,sortListByDate.length);
        } 
    }

    if (context.changeDatetimeTo !== undefined) {
      const dateTo = new Date(context.changeDatetimeTo);
      dateTo.setMinutes(dateTo.getMinutes() + 1439)

      const sortListByDate = list.sort((a,b) => b.change_datetime - a.change_datetime);

      const indexTo = list.findIndex((element: any) => {
        return new Date(element.change_datetime+ "+0000").toJSON() < dateTo.toJSON();
      });

      if (indexTo >= 0) {
        list = sortListByDate.slice(indexTo,sortListByDate.length);
      }
      else{
        list =[]
      }
    }

    return list;
  }

  async findOne(context: any) {
    if (context.code !== '') {
    await this.groupRepository.findOne({
      company: context.company,
      lang: context.lang,
      code: context.code
    });
      return true;
    }
    return false;
  }

  // CREATE GROUP WITH 3 LANGUAGE WITH SAME BODY REQ
  async create(context: any) {
    if (context.code !== '') {
      const result = await this.groupRepository.find({
        company: context.company,
        code: context.code
      });
      console.log(result.length);
      if (result.length <= 0) {
        const ts = new Date();

        const contextVi = { ...context };
        contextVi.lang = 'vi-VN';
        contextVi.change_count = context.change_count || 0;
        contextVi.create_datetime = ts.toJSON();

        const contextEn = { ...context };
        contextEn.lang = 'en-US';
        contextEn.change_count = context.change_count || 0;
        contextEn.create_datetime = ts.toJSON();
        
        const contextJa = { ...context };
        contextJa.lang = 'jp-JP';
        contextJa.change_count = context.change_count || 0;
        contextJa.create_datetime = ts.toJSON();

        await this.groupRepository.save(contextVi);
        await this.groupRepository.save(contextEn);
        await this.groupRepository.save(contextJa);

        return true;
      }
      return false;
    }
    return false;
  }

    // UPDATE GROUP WITH 3 LANGUAGE WITH SAME BODY REQ
  async update(context: any) {
    if (context.code !== '') {
      const result = await this.groupRepository.find({
        lang: context.lang,
        company: context.company,
        code: context.code
      });
      console.log(result[0].change_count);
      if(result[0].change_count === context.change_count) {
        if(result[0].active_flag === true) {
          if (result) {
            const ts = new Date();
            const contextLang = { ...context };
            if(contextLang.lang === 'vi-VN') {
              context.lang = 'vi-VN';
              context.change_count++;
              context.change_datetime = ts.toJSON();
              await this.groupRepository.update({
                  company: context.company,
                  lang: context.lang,
                  code: context.code
                },context);
              return true;
            } else if(contextLang.lang === 'en-US') {
              context.lang = 'en-US';
              context.change_count++;
              context.change_datetime = ts.toJSON();
              await this.groupRepository.update({
                  company: context.company,
                  lang: context.lang,
                  code: context.code
                },context);
              return true;
            } else if(contextLang.lang === 'jp-JP') {
              context.lang = 'jp-JP';
              context.change_count++;
              context.change_datetime = ts.toJSON();
              await this.groupRepository.update({
                  company: context.company,
                  lang: context.lang,
                  code: context.code
                },context);
              return true;
            }
            return true;
          }
          return true;
        }
        return false;
      }
      return false;
    } 
    return false;
  }

  async deleteOne(context: any) {
    if (context.code !== '') {
      const result = await this.groupRepository.find({
        company: context.company,
        code: context.code,
      });

      if (result.length > 0) {
        const contextVi = { ...context };
        contextVi.lang = 'vi-VN';

        const contextEn = { ...context };
        contextEn.lang = 'en-US';

        const contextJa = { ...context };
        contextJa.lang = 'ja-JP';

        const group_keyVi = {
          company: contextVi.company,
          lang: contextVi.lang,
          code: contextVi.code
        };

        const group_keyEn = {
          company: contextEn.company,
          lang: contextEn.lang,
          code: contextEn.code
        };

        const group_keyJa = {
          company: contextJa.company,
          lang: contextJa.lang,
          code: contextJa.code
        };

        await this.groupRepository.delete(group_keyVi);
        await this.groupRepository.delete(group_keyEn);
        await this.groupRepository.delete(group_keyJa);

        return true;
      }
      return false;
    }
    return false;
  }

  async deleteMany(context: any[]) {
    for (const element of context) {
      if (element.code !== '') {
        const result = await this.groupRepository.find({
          company: element.company,
          code: element.code
        });

        if (result.length > 0) {
          const elementVi = { ...element };
          elementVi.lang = 'vi-VN';
          const group_keyVi = {
            company: elementVi.company,
            lang: elementVi.lang,
            code: elementVi.code
          };
          await this.groupRepository.delete(group_keyVi);


          const elementEn = { ...element };
          elementEn.lang = 'en-US';
          const group_keyEn = {
            company: elementEn.company,
            lang: elementEn.lang,
            code: elementEn.code
          };
          await this.groupRepository.delete(group_keyEn);


          const elementJa = { ...element };
          elementJa.lang = 'ja-JP';
          const group_keyJa = {
            company: elementJa.company,
            lang: elementJa.lang,
            code: elementJa.code
          };
          await this.groupRepository.delete(group_keyJa);
          
          return true;
        }
        return false;
      }
      return false;
    }
  }
}
